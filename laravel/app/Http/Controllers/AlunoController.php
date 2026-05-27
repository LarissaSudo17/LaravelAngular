<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlunoController extends Controller
{

    function listar(){ 
         return response()->json([
            ["nome"=> "Amaureca","rm"=>1,"email"=>"ocarecamaismaisdeTatui@gmail.com"], 
            ["nome"=> "Chimabrunão","rm"=>2,"email"=>"opaulistamaisgaucho@gmail.com"],
             ["nome"=> "Diogo","rm"=>4,"email"=>"ojacksonmaisbranco@gmail.com"],
        ]
            );
    }
    function adicionar(){ }
    function remove(){ }
    function update(){ }

}
