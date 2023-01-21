
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    AlertDialogCloseButton,
    Icon
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react'
  import { FiShoppingCart } from 'react-icons/fi';
  import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

  function AlertAddButton({singleProduct}) {
    const {cartData,addItem,removeItem} = useContext(CartContext);
    const { isOpen, onOpen ,onClose} = useDisclosure();
    const cancelRef = React.useRef();
    const toast = useToast()
    const position = [
    'top',
    ]

    const confirmedFun = () => {
        addItem(singleProduct);
        
        // toast({
        //     // title: `${"top"} toast`,
        //     position: "top",
        //     isClosable: true,
        //     status: 'success',
        //     title: 'Added Successfully ',
        //     description: "Item Added to your Cart",
        //   });
        onClose();
    }
  
    return (
      <>
        {/* <FiShoppingCart onClick={onOpen} bg={"#167a92"} h={"23px"} w={"23px"}  color="black"/> */}
        <Icon marginBottom={"10px"} as={FiShoppingCart} h={10} w={10} marginTop={"-30px"} onClick={onOpen} marginRight={"20px"}  color="black"/>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
  
          <AlertDialogContent>
            <AlertDialogHeader>Add to Cart</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to Add the item to the Cart?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} colorScheme='red' onClick={onClose}>
                No
              </Button>
              <Button onClick={confirmedFun} colorScheme='green' ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }

  export default AlertAddButton;