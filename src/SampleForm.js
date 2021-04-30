import React from 'react'
import { Button } from 'baseui/button'
import { Input } from 'baseui/input'
import { Textarea } from 'baseui/textarea'
import { Checkbox, LABEL_PLACEMENT } from 'baseui/checkbox'
import { FormControl } from 'baseui/form-control'
import { useForm, Controller } from 'react-hook-form'
import { H3 } from 'baseui/typography'

const SampleForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm()
    const [formData, setFormData] = React.useState(null)

    const onSubmit = values => {
        setFormData(values)
        reset()
    }

    return (
        <div
            style={{
                paddingTop: '30px',
                width: '600px'
            }}>
            <H3>Your Sample form with React hook form</H3>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="name"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <FormControl
                            label={() => 'Name'}
                            caption={
                                errors && errors.name
                                    ? 'Name field is required!'
                                    : 'Enter your full name'
                            }>
                            <Input
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                inputRef={ref}
                                clearOnEscape
                            />
                        </FormControl>
                    )}
                />
                                                                                                                                                                                                     
                <Controller
                    control={control}
                    name="about"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <FormControl
                            label={() => 'About Yourself'}
                            caption={
                                errors && errors.about
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

                <Controller
                    control={control}
                    name="confirm"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <FormControl
                            caption={
                                errors &&
                                errors.confirm &&
                                'Confirm before submit!'
                            }>
                            <Checkbox
                                checked={value}
                                onChange={onChange}
                                labelPlacement={LABEL_PLACEMENT.right}>
                                Sign up for the newsletter
                            </Checkbox>
                        </FormControl>
                    )}
                />

                <Button>Submit</Button>  
            </form>
            {formData && (
                <div style={{ paddingTop: '30px' }}>
                    <H3>Your new submited data</H3>
                    <hr />
                    <ul>
                        <li>
                            <h4>
                                <b>Name</b> - {formData.name}
                            </h4>
                        </li>
                        <li>
                            <h4>
                                <b>Bio</b> - {formData.about}
                            </h4>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SampleForm
