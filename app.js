const prismicH = require('@prismicio/helpers');
const app = require('./config');
const asyncHandler = require('./utils/async-handler');
const { client } = require('./prismicConfig');

const route = app();
const PORT = route.get('port');

route.listen(PORT, () => {
  process.stdout.write(`Point your browser to: http://localhost:${PORT}\n`);
});

const prismicAutoPreviewsMiddleware = (req, _res, next) => {
  client.enableAutoPreviewsFromReq(req);
  next();
};
route.use(prismicAutoPreviewsMiddleware);

// Middleware to connect to inject prismic context
route.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  };
  next();
});

route.get(
  '/',
  asyncHandler(async (req, res) => {
    res.render('pages/home');
  })
);
