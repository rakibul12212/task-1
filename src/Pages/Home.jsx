import {Table,Thead,Tbody,Tr,Th,Td,TableContainer, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure,} from '@chakra-ui/react'
import React from 'react';

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = [ 'xl']
    return (
        <div className="p-20">
           <div className="flex  flex-col md:flex-row justify-between items-center">
             <div>
             {sizes.map((size) => (
             <button className="px-5 py-3 border rounded md:mr-5" onClick={() => handleSizeClick(size)}
             key={size}  
           >Active sale orders</button>
             ))}
             <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton
           />
          <ModalBody>
          <p className='mx-6'>hdbshjf</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {sizes.map((size) => (
             <button className="px-5 py-3 border rounded " onClick={() => handleSizeClick(size)}
             key={size}  
           >Complete sale orders</button>
             ))}
             <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton
           />
          <ModalBody>
          <p className='mx-6'>hdbshjf</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
             </div>
             <div>
             {sizes.map((size) => (
             <button className="px-5 py-3 border rounded " onClick={() => handleSizeClick(size)}
             key={size}  
           >sale orders</button>
             ))}
             <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton
           />
          <ModalBody>
          <p className='mx-6'>hdbshjf</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
             </div>
           </div>
           <div className='pt-10'>
              <TableContainer className=''>
                 <Table variant='simple'>
                     <Thead>
                       <Tr>
                         <Th className='border-2 '  fontSize="1.5rem">ID</Th>
                         <Th className='border-2' fontSize="1.5rem">Customer Name</Th>
                         <Th className='border-2 flex items-center gap-x-2' fontSize="1.5rem">Price <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="lucide lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg></span></Th>
                         <Th className='border-2' fontSize="1.5rem">Last Modified</Th>
                         <Th className='border-2' fontSize="1.5rem">Edit / View</Th>
                       </Tr>
                     </Thead>
                     <Tbody className='border'>
                          <Tr>
                              <Td>inches</Td>
                              <Td>millimetres (mm)</Td>
                              <Td isNumeric>25.4</Td>
                              <Td>millimetres (mm)</Td>
                              <Td ><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button></Td>
                          </Tr>
                          <Tr>
                              <Td>feet</Td>
                              <Td>centimetres (cm)</Td>
                              <Td isNumeric>30.48</Td>
                              <Td>centimetres (cm)</Td>
                              <Td ><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button></Td>
                          </Tr>
                          <Tr>
                              <Td>yards</Td>
                              <Td>metres (m)</Td>
                              <Td isNumeric>0.91444</Td>
                              <Td>metres (m)</Td>
                              <Td ><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button></Td>
                          </Tr>
                     </Tbody>
    
                 </Table>
              </TableContainer>
           </div>
        </div>
    );
};

export default Home;                 