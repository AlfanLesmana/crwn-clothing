import styled , {css} from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 100px;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const infoStyles = css`
    width: 23%;
`;

export const QuantityContainer = styled.div`
    padding-left: 20px;
    display: flex;  
    ${infoStyles}
    .arrow{
          cursor: pointer;
    }
    .value{
          margin: 0 10px;
    }
`;

export const PriceInfo = styled.span`
    ${infoStyles}
`;

export const NameInfo = styled.span`
    ${infoStyles}
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;

