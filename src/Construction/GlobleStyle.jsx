import { createGlobalStyle } from 'styled-components';

const GlobleStyle = createGlobalStyle`
    :root{
        --purple-primary :hsl(243,69,59);
        --accent-pink :hsl(345,88,63);
        --natural-light :hsl(222,100,97);
        --lavender-secondary :hsl(237,21,52); /*primary font color*/
        --dark-primary : hsl(237,56,20);
        --border-color :hsl(260,68,83);
    }

    *{
        margin:0;
        padding:0;
        list-style:none;
        box-sizing:norder-box;

    
    }
    body {
        background-color :#ccc;
    }
    
    .slider{
        color:#fff;
        height:200px;
        background-color:black;
    }
    
    .got-started{
        height:400px;
        background:red;
    }
    
    .quality{
        height:500px;
        background-color:purple;
    }
    
   /* front page section  */
   @keyframes rot{
              0%{
                  transform:rotate(0deg);
              }
              100%{
                transform:rotate(360deg);
              }
            }
            .rotate{
          Animation: rot 2s linear infinite;
        }
          
   /*end  home page section  */
`;
export default GlobleStyle;