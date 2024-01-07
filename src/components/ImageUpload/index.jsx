import react from "react";
import { Uploader } from "@antmjs/vantui";

export default function ImageUpload({ value, onChange }) {
  const afterRead = (event) => {
    const { file } = event.detail;
    // 可在此处新增云上传图片操作
    onChange(value.concat(file));
  };

  const deleteAction = (event) => {
    const { index } = event.detail;
    const valueNew = JSON.parse(JSON.stringify(value));
    valueNew.splice(index, 1);
    onChange(valueNew);
  };

  return (
    <Uploader
      fileList={value}
      onAfterRead={afterRead}
      onDelete={deleteAction}
      deletable
    />
  );
}
