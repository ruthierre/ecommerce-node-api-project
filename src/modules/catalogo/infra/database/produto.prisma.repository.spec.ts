
import { PrismaClient } from "@prisma/client";
import { beforeAll, describe, test, afterEach } from "vitest";
import { DeepMockProxy, mockDeep } from "vitest-mock-extended";

const prismaMock: DeepMockProxy<PrismaClient> = mockDeep<PrismaClient>();

describe('Repositorio prisma: Produto', () => {

    beforeAll(async () => {

    });

    afterEach( () => {});

    describe('Recuperar Produto por ID', ()=> {
        test('Deve recuperar por ID', ()=> {

        })        
    });
})