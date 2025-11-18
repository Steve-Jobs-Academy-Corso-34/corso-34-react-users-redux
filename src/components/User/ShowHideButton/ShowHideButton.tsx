type ShowHideButtonProps = {
    show: boolean;
    setShow: (show: boolean) => void;
};

const ShowHideButton: React.FC<ShowHideButtonProps> = ({ show, setShow }) => {
    return <button onClick={() => setShow(!show)}>{show ? "Nascondi" : "Mostra"}</button>;
};

export default ShowHideButton;
