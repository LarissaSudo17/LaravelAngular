<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfessorController extends Controller
{
    function listar(){ 
         return response()->json([
            ["nome"=> "Amaureca","cpf"=>1234567-00,"email"=>"ocarecamaismaisdeTatui@gmail.com"], 
            ["nome"=> "Chimabrunão","cpf"=>2345678-01,"email"=>"opaulistamaisgaucho@gmail.com"],
             ["nome"=> "Diogo","cpf"=>3456789-02,"email"=>"ojacksonmaisbranco@gmail.com"],
        ]
            );
    }
    function adicionar(){ }
    function remove(){ }
    function update(){ }
}
