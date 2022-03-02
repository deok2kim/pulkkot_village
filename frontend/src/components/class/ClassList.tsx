import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import media from "styles/media";
import { IClass } from "types/class";
import ClassItem from "./ClassItem";

function ClassList() {
  const [classList, setClassList] = useState<IClass[]>();
  const getClassData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/articles");
      setClassList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClassData();
  }, []);
  useEffect(() => {
    console.log(classList);
  }, [classList]);
  return (
    <ClassWrapper>
      <Title>
        <h1>Flower Class</h1>
      </Title>
      <ClassListContainer>
        {classList &&
          classList?.map((item: IClass) => (
            <ClassItem
              key={`class_list_${item.id}`}
              id={item.id}
              title={item.title}
              content={item.content}
              thumbnail_image={item.thumbnail_image}
            />
          ))}
      </ClassListContainer>
    </ClassWrapper>
  );
}

export default ClassList;

const ClassWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  ${media.medium} {
    margin-top: 60px;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title}px;
  color: ${({ theme }) => theme.colors.grayText};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.medium} {
    height: 60px;
    font-size: ${({ theme }) => theme.fontSize.content}px;
    border-bottom: #d3d3d3 1px solid;
  }
`;

const ClassListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
