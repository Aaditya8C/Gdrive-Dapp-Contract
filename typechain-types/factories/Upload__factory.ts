/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Upload, UploadInterface } from "../Upload";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "allow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "disAllow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "display",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "shareAccess",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "bool",
            name: "access",
            type: "bool",
          },
        ],
        internalType: "struct Upload.Access[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061165c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806336d6da551461005c578063bc8bef8114610078578063cf8aacdd14610096578063eb39113f146100b2578063ff9913e8146100e2575b600080fd5b61007660048036038101906100719190610f05565b6100fe565b005b610080610173565b60405161008d9190611069565b60405180910390f35b6100b060048036038101906100ab919061108b565b61049d565b005b6100cc60048036038101906100c7919061108b565b6106bf565b6040516100d991906111f9565b60405180910390f35b6100fc60048036038101906100f7919061108b565b6108d5565b005b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002001600090919091909150908161016e9190611431565b505050565b60606000805b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905081101561025c5760011515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061021857610217611503565b5b9060005260206000200160000160149054906101000a900460ff1615150361024957818061024590611561565b9250505b808061025490611561565b915050610179565b5060008167ffffffffffffffff81111561027957610278610dda565b5b6040519080825280602002602001820160405280156102b257816020015b61029f610d1b565b8152602001906001900390816102975790505b5090506000915060005b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156104945760011515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061035b5761035a611503565b5b9060005260206000200160000160149054906101000a900460ff1615150361048157600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081815481106103ce576103cd611503565b5b906000526020600020016040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff16151515158152505082848151811061046757610466611503565b5b6020026020010181905250828061047d90611561565b9350505b808061048c90611561565b9150506102bc565b50809250505090565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156106bb578173ffffffffffffffffffffffffffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106105e7576105e6611503565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036106a8576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061068357610682611503565b5b9060005260206000200160000160146101000a81548160ff0219169083151502179055505b80806106b390611561565b915050610535565b5050565b60603373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806107815750600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6107c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b790611606565b60405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156108ca57838290600052602060002001805461083d9061124a565b80601f01602080910402602001604051908101604052809291908181526020018280546108699061124a565b80156108b65780601f1061088b576101008083540402835291602001916108b6565b820191906000526020600020905b81548152906001019060200180831161089957829003601f168201915b50505050508152602001906001019061081e565b505050509050919050565b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610b875760005b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610b81578173ffffffffffffffffffffffffffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610aad57610aac611503565b5b9060005260206000200160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610b6e576001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610b4957610b48611503565b5b9060005260206000200160000160146101000a81548160ff0219169083151502179055505b8080610b7990611561565b9150506109fb565b50610d18565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052808373ffffffffffffffffffffffffffffffffffffffff168152602001600115158152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff02191690831515021790555050506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b50565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d8c82610d61565b9050919050565b610d9c81610d81565b8114610da757600080fd5b50565b600081359050610db981610d93565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e1282610dc9565b810181811067ffffffffffffffff82111715610e3157610e30610dda565b5b80604052505050565b6000610e44610d4d565b9050610e508282610e09565b919050565b600067ffffffffffffffff821115610e7057610e6f610dda565b5b610e7982610dc9565b9050602081019050919050565b82818337600083830152505050565b6000610ea8610ea384610e55565b610e3a565b905082815260208101848484011115610ec457610ec3610dc4565b5b610ecf848285610e86565b509392505050565b600082601f830112610eec57610eeb610dbf565b5b8135610efc848260208601610e95565b91505092915050565b60008060408385031215610f1c57610f1b610d57565b5b6000610f2a85828601610daa565b925050602083013567ffffffffffffffff811115610f4b57610f4a610d5c565b5b610f5785828601610ed7565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610f9681610d81565b82525050565b60008115159050919050565b610fb181610f9c565b82525050565b604082016000820151610fcd6000850182610f8d565b506020820151610fe06020850182610fa8565b50505050565b6000610ff28383610fb7565b60408301905092915050565b6000602082019050919050565b600061101682610f61565b6110208185610f6c565b935061102b83610f7d565b8060005b8381101561105c5781516110438882610fe6565b975061104e83610ffe565b92505060018101905061102f565b5085935050505092915050565b60006020820190508181036000830152611083818461100b565b905092915050565b6000602082840312156110a1576110a0610d57565b5b60006110af84828501610daa565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561111e578082015181840152602081019050611103565b60008484015250505050565b6000611135826110e4565b61113f81856110ef565b935061114f818560208601611100565b61115881610dc9565b840191505092915050565b600061116f838361112a565b905092915050565b6000602082019050919050565b600061118f826110b8565b61119981856110c3565b9350836020820285016111ab856110d4565b8060005b858110156111e757848403895281516111c88582611163565b94506111d383611177565b925060208a019950506001810190506111af565b50829750879550505050505092915050565b600060208201905081810360008301526112138184611184565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061126257607f821691505b6020821081036112755761127461121b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026112dd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826112a0565b6112e786836112a0565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061132e611329611324846112ff565b611309565b6112ff565b9050919050565b6000819050919050565b61134883611313565b61135c61135482611335565b8484546112ad565b825550505050565b600090565b611371611364565b61137c81848461133f565b505050565b5b818110156113a057611395600082611369565b600181019050611382565b5050565b601f8211156113e5576113b68161127b565b6113bf84611290565b810160208510156113ce578190505b6113e26113da85611290565b830182611381565b50505b505050565b600082821c905092915050565b6000611408600019846008026113ea565b1980831691505092915050565b600061142183836113f7565b9150826002028217905092915050565b61143a826110e4565b67ffffffffffffffff81111561145357611452610dda565b5b61145d825461124a565b6114688282856113a4565b600060209050601f83116001811461149b5760008415611489578287015190505b6114938582611415565b8655506114fb565b601f1984166114a98661127b565b60005b828110156114d1578489015182556001820191506020850194506020810190506114ac565b868310156114ee57848901516114ea601f8916826113f7565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061156c826112ff565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361159e5761159d611532565b5b600182019050919050565b600082825260208201905092915050565b7f596f7520646f6e27742068617665206163636573732121210000000000000000600082015250565b60006115f06018836115a9565b91506115fb826115ba565b602082019050919050565b6000602082019050818103600083015261161f816115e3565b905091905056fea2646970667358221220abd3516a24aa44c21a223ac9fdc910193d223def221966e9ee69c9b41eb704c364736f6c63430008110033";

type UploadConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UploadConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Upload__factory extends ContractFactory {
  constructor(...args: UploadConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Upload> {
    return super.deploy(overrides || {}) as Promise<Upload>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Upload {
    return super.attach(address) as Upload;
  }
  override connect(signer: Signer): Upload__factory {
    return super.connect(signer) as Upload__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UploadInterface {
    return new utils.Interface(_abi) as UploadInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Upload {
    return new Contract(address, _abi, signerOrProvider) as Upload;
  }
}