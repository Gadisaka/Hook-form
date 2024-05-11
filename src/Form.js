import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export const Form  =  () => {
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().required(),
        age: yup.number().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required(),
    });
    
    const { register,handleSubmit} = useForm({resolver:yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Fullname..." {...register("fullName")}/>
            
            <input type="text" placeholder="email..." {...register("email")}/>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <input type="password" placeholder="password..." {...register("password")}/>
            <input type="password" placeholder="confirmPassword..." {...register("ConfirmPassword")}/>
            <input type="submit" className='submit'/>
        </form>
        
    );
};