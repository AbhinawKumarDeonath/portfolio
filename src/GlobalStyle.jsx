import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-siging:border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    
}


.light-mode
{
    background-color:${({theme})=>theme.color.dBack};
}
.intro
{
    color:${({ theme }) => theme.color.lback};
  
    font-size:${({ theme }) => theme.fontSize.pfont};
}
.name {
      color: ${({ theme }) => theme.color.dyBack};
      text-transform:uppercase ;
     
      font-size:${({ theme }) => theme.fontSize.h1font};
    }
.project-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${'' /* margin:3.8rem; */}
    margin-top:40px;
}

.resume {
      width:180px;
      height: 40px;
      border-radius: 30px;
      display: flex;
      color: ${({theme})=> theme.color.lback};
      align-items: center;
      justify-content: center;
      border: 2px solid ${({ theme }) => theme.color.dyBack};
      margin-top: 20px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.color.dyBack} 50%,
        #191d2b 50%
      );
      background-size: 200% 100%;
      background-position: right;
      transition: all 0.5s ease-out;
    }
    .resume:hover {
      background-position: left bottom;
      color: ${({ theme }) => theme.color.dBack};
    }
    .about-h3
    {
        color:${({ theme }) => theme.color.dyBack};
        font-weight:900;
    }

    @media only screen and (max-width: 767px) {

      .intro
{
    font-size:${({ theme }) => theme.fontSize.mpfont};
    text-align:center;
}
.name {
      font-size:${({ theme }) => theme.fontSize.mh1font};
    }

    }
    @media only screen and (min-width: 767px) and (max-width: 1023px) {
      
      .intro
{

    text-align:center;
}
    }
`;