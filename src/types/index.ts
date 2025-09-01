export interface ProxyRequest {
    url: string;
    method: string;
    headers?: Record<string, string>;
    body?: any;
}

export interface ProxyResponse {
    statusCode: number;
    headers: Record<string, string>;
    body: any;
}

export interface ProxyOptions {
    timeout?: number;
    followRedirects?: boolean;
}