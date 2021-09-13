interface BaseInfo
{
    name: string;
    url: string;
}

interface PaginateInterface
{
    count: number;
    pages: number;
    next?: string;
    prev?: string;
}

export { BaseInfo, PaginateInterface };