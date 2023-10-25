export const ApiGatewayConfig: any = () => ({
    port: parseInt(process.env.API_PORT, 10) || 3100,
    cors: process.env.APP_CORS,
    swagger: {
      url: process.env.API_GATEWAY_URL,
      path: process.env.API_GATEWAY_SWAGGER,
      name: 'api gateway',
    },
  });
  