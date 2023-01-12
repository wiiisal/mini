import React from 'react';
import {
    FormControl,
    FormLabel,
    FormHelperText,Input
  } from '@chakra-ui/react';
import './Contact.css'

export default function Contact() {
  return (
    <div className='mailform'>
      
      <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type='email' />
      <FormHelperText className='contactmessage'>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
      <FormLabel>FullName</FormLabel>
      <Input type='FullName' />
      <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
      <FormLabel>Subject</FormLabel>
      <Input type='Subject' />
      <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl>
      <FormLabel>Message</FormLabel>
      <Input type='Message' />
      <FormHelperText className='contactmessage'>Soon you will get a response.</FormHelperText>
      </FormControl>

    </div>
  )
}
