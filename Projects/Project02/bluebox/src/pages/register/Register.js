// this is the register page, where you make the new account register
import React from "react";
import "./Register.css";
import Logo from "./../../logo.png";
import Form from "../../components/fom/Form";
import Input from "../../components/input/Input";
import ImageContainer from "../../components/imagecontainer/ImageContainer";
import Button from "../../components/button/Button";
import { Api } from "../../Api/Api";
export default function Register(){
    // create function
    const create = async (event)=>{
        event.preventDefault();
        const userName = event.target.inputName.value;
        const userLastName = event.target.inputLastName.value;
        const userCpf = event.target.inputCpf.value;
        const userEmail = event.target.inputEmail.value;
        const userPass = event.target.inputPass.value;
        //create a PauLoad model
        const payLoad = {
            name: userName,
            lastName: userLastName,
            email: userEmail,
            password: userPass,
            CPF: userCpf,
        }
        // make an request for the back and
        const response = await Api.buildApiPostRequest(
            Api.createUserUrl(),
            payLoad
        )
        
        console.log(response);
    }
    return (
        <section className="box">
            <Form submit={create} classname={"form"}>
                    <ImageContainer image={Logo} description={""} classname={""} classimage={"logo"}></ImageContainer>
                    <Input inputType="text" inputName="inputName" inputHold="Enter with the new user name"></Input>
                    <Input inputType="text" inputName="inputLastName" inputHold="Enter with your last name"></Input>
                    <Input inputType="text" inputName="inputCpf" inputHold="Enter with your Cpf"></Input>
                    <Input inputType="text" inputName="inputEmail" inputHold="Enter with your Email"></Input>
                    <Input inputType="text" inputName="inputPass" inputHold="Enter with your Password"></Input>
                    <Input inputType="text" inputName="inputPassAgain" inputHold="Confirm your Password"></Input>
                    <Button> Register </Button>
            </Form>
        </section>
    );
}