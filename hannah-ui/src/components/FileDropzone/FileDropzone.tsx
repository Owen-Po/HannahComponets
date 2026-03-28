import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, AlertCircle, Loader2 } from "lucide-react";

export interface FileDropzoneProps {
  onUpload: (file: File) => Promise<void>;
  isUploading?: boolean;
  title?: string;
  accept?: Record<string, string[]>;
  formatText?: string;
  shouldClear?: boolean;
}

const defaultAccept = {
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
  "application/vnd.ms-excel": [".xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
  "image/*": [".jpg", ".jpeg", ".png", ".gif", ".webp"],
};

export const FileDropzone = ({
  onUpload,
  isUploading = false,
  title = "Cargar Archivo",
  accept = defaultAccept,
  formatText = "PDF, DOC, XLS, Imágenes hasta 10MB",
  shouldClear = false,
}: FileDropzoneProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (shouldClear) setSelectedFile(null);
  }, [shouldClear]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  const handleUploadClick = async () => {
    if (!selectedFile) return;
    try {
      await onUpload(selectedFile);
      setSelectedFile(null);
    } catch {
      // Error handled by parent
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div
        {...getRootProps()}
        className={`relative flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 overflow-hidden ${
          isDragActive
            ? "border-amber-500 bg-amber-50 scale-[1.02]"
            : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        <div
          className={`p-4 rounded-full mb-3 shadow-sm ${
            isDragActive ? "bg-amber-100" : "bg-white"
          }`}
        >
          <UploadCloud
            className={`w-8 h-8 ${isDragActive ? "text-amber-600" : "text-gray-400"}`}
          />
        </div>
        <p className="mb-2 text-sm text-center text-gray-600">
          <span className="font-bold text-gray-800">{title}</span> o arrastra y suelta aquí
        </p>
        <p className="text-xs text-center text-gray-400">{formatText}</p>
      </div>

      {selectedFile && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl shadow-sm flex flex-col gap-3 animate-in fade-in">
          <div className="flex items-start gap-4">
            {selectedFile.type.startsWith("image/") ? (
              <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-amber-200 shadow-sm bg-white flex items-center justify-center">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Previsualización"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="p-2 bg-amber-100 text-amber-600 rounded-full mt-1 shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
            )}
            <div className="flex-1 min-w-0 py-1">
              <h4 className="text-sm font-semibold text-amber-900 mb-1">
                ¿Estás seguro de subir este archivo?
              </h4>
              <p
                className="text-xs font-medium text-amber-800 truncate"
                title={selectedFile.name}
              >
                {selectedFile.name}
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-full pt-2">
            <button
              type="button"
              onClick={() => setSelectedFile(null)}
              disabled={isUploading}
              className="flex-1 px-4 py-2 text-sm font-medium bg-white border border-amber-200 text-amber-800 rounded-lg hover:bg-amber-100 disabled:opacity-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleUploadClick}
              disabled={isUploading}
              className="flex-1 px-4 py-2 text-sm font-medium bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 transition-colors"
            >
              {isUploading ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Subiendo...
                </span>
              ) : (
                "Sí, confirmar"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
