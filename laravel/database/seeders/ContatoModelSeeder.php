<?php

namespace Database\Seeders;

use App\Models\ContatoModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class ContatoModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $contato= new ContatoModel();
       $contato->nome = "Larissa";
       $contato->email = "sudolarissa@gmail.com";
       $contato->save();
    }
}
