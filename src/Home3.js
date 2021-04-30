import React, { useContext } from 'react'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox'
import { FormControl } from 'baseui/form-control'
import { useForm, Controller } from 'react-hook-form'
import { H3 } from 'baseui/typography'
import { AppContext } from './Context'

const Home3 = props => {
    const { key } = props.match.params
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm()
    //  const [formData, setFormData] = React.useState(null)
    const { value, saveData } = useContext(AppContext)

    const onSubmit = values => {
        //setFormData(values)
        console.log('value', value)
        value[key] = { ...value[key], ...values }
        saveData(value)

        reset()
    }

    return (
        <div className="max-w-prose mx-auto  p-20 bg-gray-100  mt-10  ">
            <div
                style={{
                    paddingTop: '30px',
                    width: '400px'
                }}>
                <H3>Enter your message here</H3>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="message"
                        render={({
                            field: { onChange, onBlur, value, ref }
                        }) => (
                            <FormControl
                                label={() => 'Enter your message'}
                                caption={
                                    errors && errors.message
                                        ? 'Please enter your bio!'
                                        : 'Enter your bio!'
                                }>
                                <Textarea
                                    value={value}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    ref={ref}
                                    clearOnEscape
                                />
                            </FormControl>
                        )}
                    />

                    <Button className=" w-full bg-gradient-to-r from-indigo-900 to-indigo-900  ">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}
export default Home3
