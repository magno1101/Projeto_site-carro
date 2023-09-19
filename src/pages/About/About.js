import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className={styles.about}>
            <h2>Bem-vindo à Concessionaria Veloz</h2>
            <p>Na , estamos comprometidos em oferecer uma experiência de compra de carros excepcional. Nossa ampla gama de veículos de alta qualidade atende a todas as necessidades e orçamentos. Se você está procurando um carro novo, usado ou certificado, estamos aqui para ajudar você a encontrar o veículo dos seus sonhos.
            </p>
            <h2>Nossos Serviços</h2>
            <p><span>Inventário Diversificado:</span> Oferecemos uma seleção diversificada de carros novos e usados, incluindo sedans, SUVs, caminhonetes, carros esportivos e veículos elétricos. Temos o carro perfeito para cada estilo de vida.

                <h4>Financiamento Acessível:</h4> Nossa equipe de especialistas em financiamento trabalha com uma variedade de instituições financeiras para oferecer opções de financiamento flexíveis. Queremos ajudar você a encontrar um plano de pagamento que se adapte às suas necessidades.

                <h4>Inspeção e Certificação:</h4> Todos os nossos carros usados passam por rigorosas inspeções e manutenção para garantir que você esteja comprando um veículo confiável. Oferecemos carros certificados que vêm com garantias adicionais para sua tranquilidade.

                <h4>Troca de Veículos:</h4>Se você deseja trocar seu carro atual, estamos interessados em fazer uma avaliação justa e oferecer a você o melhor valor possível.

                <h4>Atendimento ao Cliente Excepcional:</h4> Nossa equipe de vendas altamente treinada e amigável está à disposição para responder a todas as suas perguntas e ajudá-lo a tomar decisões informadas. Queremos que sua experiência conosco seja a melhor possível.
            </p>
            <h2>Por que escolher a Concessionaria Veloz</h2>
            <p>Reputação Sólida: Somos conhecidos por nossa integridade e compromisso com a satisfação do cliente. Temos uma base de clientes fiel que nos escolhe repetidamente.

                Transparência: Fornecemos informações completas sobre nossos veículos, incluindo histórico de manutenção e relatórios de histórico do veículo, para que você possa comprar com confiança.

                Localização Conveniente: Nossa loja está convenientemente localizada na região central da cidade, com estacionamento fácil e acesso.

                Negociação Justa: Acreditamos em negociações justas e transparentes. Nossa equipe está comprometida em oferecer preços competitivos e negociar de forma justa.
            </p>
            <Link to="/posts/create" className="btn">Criar Anúncio</Link>
        </div>
    )
}

export default About;