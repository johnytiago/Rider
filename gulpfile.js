
const gulp = require('gulp')
const webpack = require('gulp-webpack')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const bower = require('gulp-bower')

const dist = "server/public/"

gulp.task('app', ()=>{
    gulp.src('app/web/main.js')
        .pipe(webpack({
            output: { filename: 'main.js' },
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015','react','stage-0'],
                        plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy']
                    }
                }]
            }
        }))
        .pipe(gulp.dest(dist+'app/'))
})

gulp.task('css',()=>{

    gulp.src('web/scss/**/*.scss')
        .pipe(sass({ includePaths: [
            'bower_components/bootstrap-sass/assets/stylesheets',
            'bower_components/font-awesome/scss'
         ]}))
        .pipe(concat('main.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(dist+'css'))

    gulp.src('bower_components/bootstrap-sass/assets/fonts/bootstrap/*.*')
        .pipe(gulp.dest(dist+'fonts/bootstrap'))
})


gulp.task('assets',()=>{
    gulp.src("webapp/images/*.*")
        .pipe(gulp.dest(dist+'images'))
})

gulp.task('web',()=>{
    gulp.src('web/*.html')
        .pipe(gulp.dest(dist))
})


gulp.task('icons',()=>{ 
    return gulp.src('bower_components/font-awesome/fonts/**.*') 
        .pipe(gulp.dest(dist+'fonts')) 
})

gulp.task('bower',()=>{ 
    return bower()
         .pipe(gulp.dest('bower_components/')) 
})

gulp.task('min', ()=>{
    gulp.src(dist+'app/*.js')
        .pipe(uglify())
        .pipe(gulp.dest(dist+'app/min/'))
})

gulp.task('watch',()=>{
     gulp.watch('web/scss/**/*.scss', ['css']) 
     gulp.watch('app/**/*.js', ['app'])
     gulp.watch('web/*.html', ['web']) 
    gulp.watch('web/images/**/*.*', ['assets'])
})
