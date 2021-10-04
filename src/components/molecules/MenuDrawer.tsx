import { memo, VFC } from "react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
} from "@chakra-ui/react"

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickUserManagemnet: () => void;
    onClickSettig: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
    const { isOpen, onClose, onClickHome, onClickUserManagemnet, onClickSettig } = props;
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%" onClick={onClickHome}>TOP</Button>
                        <Button w="100%" onClick={onClickUserManagemnet}>ユーザー一覧</Button>
                        <Button w="100%" onClick={onClickSettig}>設定</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
});