import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'// tudo minusculo e juntos
})
export class FileSizePipe implements PipeTransform{

  transform(size: number) {

    let tamanhoCalculado = (size / (1024 * 1024)); // convertemos de byte para megabyte
    let extension = ' MB';

    if (tamanhoCalculado > 1024) {
      tamanhoCalculado = (tamanhoCalculado / 1024);
      extension = ' GB';
    }

    return tamanhoCalculado.toFixed(2) + extension;
  }

}
