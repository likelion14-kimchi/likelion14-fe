import styled from "styled-components";
import CollabCard from "../../components/collabCard/CollabCard";

export default function CollabSection() {
    return (
        <Wrapper>


            <CardBox>
                <CollabCard title="Component" />
                <CollabCard title="Teamwork" />
                <CollabCard title="Milestone" />
            </CardBox>
        </Wrapper>
    );
} 

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 62px;
`