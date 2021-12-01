import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
        .bodyWrapper{
            margin-top: 11%;
        }

        @media (max-width: 480px) {
            
            .bodyWrapper{
                margin-top: 30% !important;
            }
        }
        @media (max-width: 720px) {
            
            .bodyWrapper{
                margin-top: 20%;
            }
        }
        @media (max-width: 960px) {
            
            .bodyWrapper{
                margin-top: 15%;
            }
        }

`;
export default GlobleStyle;