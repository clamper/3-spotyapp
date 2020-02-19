import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageControl'
})
export class ImageControlPipe implements PipeTransform {

  transform(image: any[]): string {
    if (!image) {
      return 'assets/img/noimage.png';
    } else {

      if (image.length > 0) {
        return image[0].url;
      }
    }

  }

}
