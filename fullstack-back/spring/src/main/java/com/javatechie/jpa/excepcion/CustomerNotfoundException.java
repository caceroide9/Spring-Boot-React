package com.javatechie.jpa.excepcion;


public class CustomerNotfoundException extends RuntimeException{
    public CustomerNotfoundException(int id){
        super("Could not found the user with id "+ id);
    }
}
