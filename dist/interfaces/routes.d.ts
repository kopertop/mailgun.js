export interface Route {
    actions: string[];
    created_at: string;
    description: string;
    expression: string;
    id: string;
    priority: number;
}
export interface UpdateRouteResponse extends Route {
    message: string;
}
export interface DestroyRouteResponse {
    id: string;
    message: string;
}
export declare type CreateUpdateRouteData = {
    priority?: number;
    description?: string;
    expression: string;
    action: string[];
};
export declare type RoutesListQuery = {
    limit?: number;
    skip?: number;
};
