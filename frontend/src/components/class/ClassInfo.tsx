import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
import ToastEditor from "../editor/ToastEditor";

function ClassInfo() {
  const [content, setContent] = useState<string | undefined>("");
  const [className, setClassName] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postClassInfo();
  };

  const onChangeContent = (e: string | undefined) => {
    setContent(e);
  };

  const postClassInfo = async () => {
    try {
      const data = await axios.post("http://localhost:8000/articles/", {
        title: className,
        content: content,
      });
      console.log(data);
      console.log(Response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <ClassInfoContainer>
      <Form onSubmit={onSubmit}>
        <BeforeInput>
          클래스명
          <Input
            width="400px"
            height="50px"
            placeholder="클래스명을 입력하세요"
            onChange={onChange}
          />
        </BeforeInput>
        <Button variant="secondary" width="100px" height="50px">
          작성 완료
        </Button>
      </Form>

      <ToastEditor onChangeContent={onChangeContent} />
    </ClassInfoContainer>
  );
}

export default ClassInfo;

const ClassInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BeforeInput = styled.div`
  margin-bottom: 50px;
  margin-right: 50px;
`;

const Form = styled.form`
  display: flex;
`;
