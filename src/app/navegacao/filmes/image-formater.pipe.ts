import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageformater'// tudo minusculo e juntos
})
export class ImageFormaterPipe implements PipeTransform{
transform(imagem: string, caminho: string = '', substituir: boolean) {
   if (caminho == 'default') {  caminho = 'assets'; }

   if (imagem.length == 0 && substituir) {
     imagem = 'movie-0.png';
    //  imagem = 'whay.png'
   }

   return '/' + caminho + '/' + imagem;
}
}
