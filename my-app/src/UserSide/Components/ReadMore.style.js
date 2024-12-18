
import styled from "styled-components";

export const ReadMoreContainer = styled.div`

width: 100vw;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 2rem;
gap: 2rem;    

.Container-ReadMore {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    padding-bottom: 6rem;
    padding-top: 4rem;
    border-radius: 2rem;
    gap: 2rem;
    border: #DCDDE1 2px solid;
    background-color: white;
}
.Contain {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 18px;
    color: #4F4F4F;
    
}
.bold {
 font-weight: 600;
}
.dot {
    width: 5px;
}
.Heading {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 12px;
    color: #4F4F4F;
}
.arrowSvg {
    cursor: pointer;
    width: 10px;
}
.pageNumber {
    display: flex;
    align-items: center;
    gap: .1em;
}
.pageNumber > p {
    color: #000;
}

`
