import { FormDataMenuItems } from "../pages/ResOwnerPage";

type PostProps = {
    id?: string | undefined;
    formData: FormDataMenuItems;
    setFormData: React.Dispatch<React.SetStateAction<FormDataMenuItems>>;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    url: string;
};


const useFetchPost = ({setFormData, formData, setShow, url}: PostProps) => {


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
        // Assert that files is not null
        const selectedFile = files!;
        setFormData((prev) => ({ ...prev, dish: selectedFile[0] }));
    } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
        const value = formData[key];
        if (value !== null && typeof value !== 'undefined') {
            data.append(key, value);
        }
    });

    try {
        await fetch(url, {
            method: 'POST',
            body: data,
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // navigate(`/restuarants/${id}`);
                setShow(false);
            });
    } catch (err) {
        console.error(err);
    } 
};

    return {handleChange, handleSubmit};
}
export default useFetchPost
