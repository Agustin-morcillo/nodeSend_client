import React from "react";
import { useFormik } from "formik"
import * as Yup from "yup"
import FormErrorMsg from "../components/FormErrorMsg"


export default function Login() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Debes completar este campo")
                .email("Debes ingresar un email válido"),
            password: Yup.string()
                .required("Debes completar este campo")
        }),
        onSubmit: values => {
            console.log(values)
        }
    })
    return (
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
            <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Iniciar Sesión</h2>

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <form onSubmit={formik.handleSubmit} className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4" >
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-black text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                placeholder="Ingrese su email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && <FormErrorMsg message={formik.errors.email} />}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-black text-sm font-bold mb-2">Contraseña</label>
                            <input
                                type="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                placeholder="Ingrese su contraseña"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && <FormErrorMsg message={formik.errors.password} />}
                        </div>

                        <input type="submit"
                            value="Iniciar Sesión"
                            className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
