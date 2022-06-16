import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
// const imageminGifsicle = require('imagemin-gifsicle');

console.log('开始压缩...')

const option  = {
	plugins: [
    imageminJpegtran({
      quality:80
    }),
    imageminGifsicle({
      optimizationLevel:3
    }),
		imageminPngquant({
			quality: [0.6, 0.8]
		})
	]
}

await imagemin(['image/*.{jpg,png,gif}'], { ...option, ...{ destination: 'build/' }});
await imagemin(['image/ali/*.{jpg,png,gif}'], { ...option, ...{ destination: 'build/ali/'}});
await imagemin(['image/s/*.{jpg,png,gif}'], { ...option,...{ destination: 'build/s/'}});

console.log('压缩结束')