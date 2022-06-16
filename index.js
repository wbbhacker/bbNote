import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
// const imageminGifsicle = require('imagemin-gifsicle');

console.log('start...')

const files = await imagemin(['image/*.{jpg,png,gif}'], {
	destination: 'build/',
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
});

console.log('end!!')