
  export interface RequestCustom {
    user?: {
      name?: string;
      email?: string;
      given_name?: string;
      family_name?: string;
      sub?: string;
      preferred_username?: string;
    };
    tenant?: string;
    token?: string;
  }
  
  
  export declare interface ResponseCustom {
    data: any;
    status_code: number;
    success?: boolean;
  }
  
  export declare interface HeadersCustom {
    'Content-Type'?: string;
    'Content-Length'?: number;
    'Ocp-Apim-Subscription-Key': string;
  }
  
  export type TokenType = 'id-token' | 'access-token' | 'refresh-token';
  
  
  export type DecodedToken = {
    exp: number;
    iat: number;
    jti: string;
    iss: string;
    sub?: string;
    email_verified?: boolean;
    tckn?: String;
    name?: string;
    surname?:string
    username?:string
    mobile?: string;
    gender?:string;
    preferred_username?: string;
    given_name?: string;
    family_name?: string;
    email?: string;
    nonce?: string;
    address?: {
      street_address?: string;
      locality?: string;
      region?: string;
      postal_code?: string;
      country?: string;
    };
    ip?:string;
  };
  