module.exports = {
    publicPath:'./',
	devServer: {
		host:'localhost',
		port:8080,
		https:false,
		open:true,
		// proxy: {
		// 	'/api': {
		// 		target: 'http://item.jozon.cn/',
		// 		changeOrigin: true, 
		// 		secure: false,  
		// 		credentials: 'include',
		// 		pathRewrite: {
		// 			'^/api': ''
		// 		}
		// 	}
		// }
	},
}