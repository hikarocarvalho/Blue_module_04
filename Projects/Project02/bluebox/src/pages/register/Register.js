import React from "react";
import "./Register.css";
import Logo from "./../../logo.png";
import Form from "../../components/fom/Form";
import Input from "../../components/input/Input";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import Button from "../../components/button/Button";
export default function Register(){
    return (
        <section className="box">
            <Form submit={""} classname={"form"}>
                    <ImageContainer image={Logo} description={""} classname={""} classimage={"logo"}></ImageContainer>
                    <Input inputType="text" inputName="imputUser" inputHold="Enter with the new user name"></Input>
                    <Input inputType="text" inputName="inputPass" inputHold="Enter with your last name"></Input>
                    <Input inputType="text" inputName="inputPass" inputHold="Enter with your Cpf"></Input>
                    <Input inputType="text" inputName="inputPass" inputHold="Enter with your Email"></Input>
                    <Input inputType="text" inputName="inputPass" inputHold="Enter with your Password"></Input>
                    <Input inputType="text" inputName="inputPassAgain" inputHold="Confirm your Password"></Input>
                    <Button> Register </Button>
            </Form>
        </section>
    );
}