import React from "react";
import Logo from "./logo.png";
import "./Login.css";
import Form from "../../components/fom/Form";
import Input from "../../components/input/Input";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import Button from "../../components/button/Button";
export default function Login(){
    return (
        <section className="box">
            <Form submit={""} classname={"form"}>
                <ImageContainer image={Logo} description={""} classname={""} classimage={"logo"}></ImageContainer>
                <Input inputType='text' inputName="user" inputHold="Enter with your user name"></Input>
                <Input inputType='password' inputName="pass" inputHold="Enter with your password"></Input>
                <Button> Login </Button>
            </Form>
        </section>
    );
}