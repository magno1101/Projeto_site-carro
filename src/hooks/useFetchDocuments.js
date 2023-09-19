import { useState, useEffect } from 'react';
import { db } from "../firebase/config";
import {
    collection, 
    query, 
    orderBy, 
    onSnapshot, 
    where,
} from 'firebase/firestore';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Lida com possível vazamento de memória
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadData() {
            if (cancelled) return;

            const collectionRef = collection(db, docCollection);

            try {
                let q;

                if (search) {
                    q = query(
                        collectionRef, 
                        where("tagsArray", "array-contains", search), 
                        orderBy("createdAt", "desc")
                    );
                } else if (uid) {
                    q = query(
                        collectionRef, 
                        where("uid", "==", uid), 
                        orderBy("createdAt", "desc")
                    );
                } else {
                    q = query(collectionRef, orderBy("createdAt", "desc"));
                }

                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                    setLoading(false);
                });

                // Retorne a função de cancelamento para evitar vazamento de memória
                return () => unsubscribe();

            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        loadData();

        // Use a função de retorno para cancelar o carregamento se o componente for desmontado
        return () => setCancelled(true);
    }, [docCollection, search, uid, cancelled]);

    return { documents, loading, error };
};
