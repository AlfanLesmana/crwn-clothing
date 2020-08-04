import styled from 'styled-components'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
    width: 50px;
    height: 50px;
    margin-left: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ItemCountContainer = styled.div`
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    bottom: 8px;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
    width: 50px;
    height: 50px;
`;