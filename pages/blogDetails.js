import React, { Component} from 'react'
import { useRouter } from 'next/router';
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/shared/BasePage';
import BlogContent from  "./jsonData/blogContent.json"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class BlogDetails extends Component{
    render(){
        // const router = useRouter();
        console.log("props", this.props)
        return(
            <Modal isOpen="isOpen" toggle="toggle" className="" backdrop="backdrop">
            <ModalHeader toggle="toggle">Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            {/* <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter> */}
            </Modal>
            // <BaseLayout>
            // <BasePage >
            // {/* {this.props.router.query.title} */}
            // </BasePage>
            // </BaseLayout>
        )
    }
}

export default BlogDetails;

