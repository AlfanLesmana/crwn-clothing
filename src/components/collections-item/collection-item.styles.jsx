import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom : 15px;
    &:hover{
        .image{
            opacity: 0.8;
        }
        button{
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 250px;
    font-size: 20px;
    display: none;
`;

export const CollectionItemFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    .name{
        width: 90%;
        margin-bottom: 10px;
    }
    .price{
        width: 10%;
        margin-bottom: 15px;
    }
`;


export const NameInfo = styled.span`
    width: 90%;
    margin-bottom: 50px;
`;

export const PriceInfo = styled.span`
    width: 10%;
    text-align : left;
`;