import { useEffect, useState } from "react";

export type Restaurant = {
    _id: string;
    name: string;
    cuisine: string;
    location: string;
    coverImage: string;
    createdBy?: {
        fullname: string;
        _id: string;
    };
    menu:  Array<{
        _id: string;
        name: string;
        dish: string;
        price: string;
        description: string;
    }>;
};


type GetProps = {
    id?: string | undefined;
    url: string;
}

const useFetchGet = ({ id, url }: GetProps) => {
    const [data, setData] = useState<Restaurant | null>(null);

    useEffect(() => {
        const fetchOwner = async () => {
            await fetch(url)
                .then((res) => res.json())
                .then((res: Restaurant) => {
                    setData(res);
                    console.log(res);
                })
                .catch((err) => console.log(err));
        };
        fetchOwner();
    }, [id, url]);
    return { data };
};

export default useFetchGet
