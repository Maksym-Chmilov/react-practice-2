import styled from 'styled-components';

// export const Text = styled.p`
//   font-size: 30px;
//   color: green;
//   background-color: orange;

//   &:hover {
//     color: white;
//   }
// `;

// export const NativeText = styled.span`
// font-size: 25px;
// color: blue;

// ${Text}:hover & {
//     background-color: black;
// }
// `

export const NativeText = styled.span`
  font-size: 25px;
  color: blue;
  background-color: ${({ isRed }) => (isRed ? 'red' : 'yellow')};
`;

export const Text = styled.p`
  font-size: 30px;
  color: green;
  background-color: orange;

  &:hover {
    color: white;
  }
  &:hover ${NativeText} {
    background-color: black;
  }
`;

export const Btn = styled.button`
background-color: black;
color: orange;
width: 100px;
height: 50px;
font-size: 20px;
align-items: center;
cursor: pointer;
border: 1px solid orange;
border-radius: 5px;
&:hover {
  background-color: orange;
  color: black;
  border: 2px solid black;
}
`
