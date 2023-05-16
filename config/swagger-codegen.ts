import { execSync } from 'child_process';

export async function generateSwaggerTypes() {
    const url = process.env.NUXT_PUBLIC_API_URL;

    const swaggerCodeGenCommand = `rimraf ./packages/api/generated/ && swagger-typescript-api\
        -p ${url}/docs/api.json\
        -o ./packages/api/generated/\
        -t ./packages/api/templates\
        --module-name-index 5\
        --union-enums\
        --extract-request-params\
        --enum-names-as-values\
        --responses\
        --extract-response-error\
        --extract-response-body\
        --extract-request-body\
        --unwrap-response-data\
        --route-types\
        --extract-enums
    `;

    execSync(swaggerCodeGenCommand, { stdio: 'inherit' });
    console.log(`📝  Generated Swagger types from ${url}`);
}
