import { RouteResponse } from "@origamicore/core";

export default class RedisError
{
    static contextNotFound:RouteResponse=RouteResponse.failed(null,'Context Not Found','redis001');
}