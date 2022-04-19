import CloseIcon from "@/icons/close.svg";
import DocumentIcon from "@/icons/document.svg";
import { getFileExtension } from "@/utils/fileExtension";
import styles from "./UploadedFile.module.css";
import { getFormattedFileSize } from "@/utils/fileSize";
import classnames from "classnames";
import { t } from "i18next";
import DeleteIcon from "@/icons/delete.svg";
import { ReactElement } from "react";
import i18n from "../../../utils/translation";

interface UploadedFileProps {
    chip?: ReactElement;
    className?: string;
    fileName: string;
    fileSize: number;
    uploadDate?: Date;
    onDelete: () => void;
    deleteIcon?: "close" | "delete";
}

const UploadedFile = ({
    chip,
    className,
    fileName,
    fileSize,
    uploadDate,
    onDelete,
    deleteIcon = "close",
}: UploadedFileProps) => {
    return (
        <div className={classnames(className, styles.root)}>
            <DocumentIcon className={styles.documentIcon} />
            <div className={styles.fileInformation}>
                <h3 className={styles.fileName} title={fileName}>
                    {fileName}
                </h3>
                <div className={styles.fileDetails}>
                    {getFormattedFileSize(fileSize)} -{" "}
                    {uploadDate
                        ? uploadDate.toLocaleString(i18n.resolvedLanguage, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                          })
                        : getFileExtension(fileName).toLocaleUpperCase()}
                </div>
            </div>
            {chip ? <div className={styles.chip}>{chip}</div> : null}
            <button
                aria-label={t("generic.actions.remove")}
                onClick={onDelete}
                className={styles.dismissButton}
            >
                {deleteIcon === "close" ? <CloseIcon /> : <DeleteIcon />}
            </button>
        </div>
    );
};

export default UploadedFile;
