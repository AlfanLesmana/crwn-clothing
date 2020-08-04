import styled from 'styled-components'

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 50px;
    z-index: 5;
`;

export const CartItemsContainer = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const EmptyMessage = styled.span`
    font-size: 25px;
    margin: auto;
`;